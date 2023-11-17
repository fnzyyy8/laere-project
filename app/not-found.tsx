import style from "./notfound.module.scss"

export default function notFound() {
    return (
        <main className='h-screen flex justify-center items-center flex-col bg-primary'>
            <div className={style.notFound_container}>
                <h1>Sorry, this page not ready</h1>
                <p>Back to <a href="/">home</a></p>

            </div>

        </main>
    )
}