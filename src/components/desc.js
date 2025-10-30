import Link from "next/link";

export default function Desc() {
    return (
        <div className="d-flex flex-column align-items-center" style={{paddingTop: "130px"}}>
            <div className="container">
                <h1 className="display-2 text-center text-light" style={{fontWeight: "500"}}>
                    ПРИКУРИТЬ АВТО В ГОРОДЕ АЛМАТЫ 24/7 <br /> ЦЕНА ДОГОВОРНАЯ <br />
                </h1>
                <hr className="w-100 hr-gold" />
                <Link href={"tel:+77070421702"} className="text-decoration-none">
                    <h1 className="display-2 text-center text-light mb-5" style={{fontWeight: "400"}}>
                        +7 707 042 17 02
                    </h1>
                </Link>
                {/* <div className="w-100 mb-5">
                    <div className="mb-4">
                        <Link href={"https://api.whatsapp.com/send?phone=77070421702"} className="btn btn-outline-warning m-0 w-100">
                            <strong>WhatsApp</strong>
                        </Link>
                    </div>
                </div> */}
            </div>
        </div>
    );
}
