import styles from './style.module.css'

const DocsIdPage = ({ params }: { params: any }) => {
  console.log(params)

  return (
    <div>
      <h1 className={`${styles.title} ${styles.textUppercase}`}>
        Docs ID Page: {params.id}
      </h1>
    </div>
  )
}

export default DocsIdPage
