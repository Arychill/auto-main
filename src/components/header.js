import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-dark shadow z-3" style={{position: "fixed", top: "0" , left: "0", right: "0"}}>
            <div className="container p-3 d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <Link href={"#"} className="text-decoration-none">
                        <h4 className="text-dark gold-text">
                            Gold Auto Service
                        </h4>
                    </Link>
                </div>
                <div className="d-flex align-items-center">
                    <div>
                        <Link href={"tel:+77070178901"} className="btn btn-gold m-0" style={{color: "rgb(27, 25, 25)"}}>
                            <strong>Заказать услугу</strong>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}
