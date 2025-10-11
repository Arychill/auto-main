import Link from "next/link";

export default function Services() {
    return (
        <div className="pb-5">
            <div className="container">
                <h3 className="mb-4 text-center">Наши дополнительные услуги</h3>
                <div className="mb-5">
                    <div className="p-3 mb-3 shadow d-flex" style={{position:"relative", border: "0", borderRadius: "20px", background: "rgba(255,255,255,0.1"}}>
                        <img src="/images/podkachka.jpeg" alt="" className="serv-img"/>
                        <p className="text-light m-0 ms-5">Подкачка колес от 4000 тнг</p>
                    </div>
                    <div className="p-3 mb-3 shadow" style={{position:"relative", border: "0", borderRadius: "20px", background: "rgba(255,255,255,0.1"}}>
                        <img src="/images/toplivo.jpeg" alt="" className="serv-img"/>
                        <p className="text-light m-0 ms-5">Доставка топлива от 4000 тнг</p>
                    </div>
                    <div className="p-3 mb-3 shadow" style={{position:"relative", border: "0", borderRadius: "20px", background: "rgba(255,255,255,0.1"}}>
                        <img src="/images/driver.jpeg" alt="" className="serv-img"/>
                        <p className="text-light m-0 ms-5">Трезвый водитель от 5000 тнг</p>
                    </div>
                </div>
                <div className="d-flex justify-content-center mb-5" >
                    <img src="/images/background.jpeg" className="img-fluid rounded" alt="" />
                </div>
                <div className="mb-5">
                    <Link href={"tel:+77070178901"} className="btn btn-gold m-0 w-100">
                        <strong>Позвонить</strong>
                    </Link>
                </div>
            </div>
        </div>
    );
}
