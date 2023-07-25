import "./Page.css";


function Page({align="center", name, children})  {
    return (
        <section className={`page ${name} ${align}`} dir="rtl">
            {children}
        </section>
    )
}


export default Page;