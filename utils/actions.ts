'use server';
import { revalidatePath } from 'next/cache';
import db from './db';

export const completeTodo = async (id: string) => {
  await db.todo.update({
    where: { id },
    data: { completed: true },
  });

  revalidatePath('/todos');
};

export const newTodo = async (formData: FormData) => {
  const content = formData.get('content');
  if (content !== null) {
    const todo = await db.todo.create({
      data: { content: content.toString() },
    });

    revalidatePath('/todos');
  }
};
