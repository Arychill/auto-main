import PhoneLink from "@/components/phone-link";
import { PHONE_DISPLAY } from "@/lib/contact";
import Link from "next/link";

export default function Desc() {
    return (
        <div className="d-flex flex-column align-items-center" style={{paddingTop: "130px"}}>
            <div className="container">
                <h1 className="display-2 text-center text-light" style={{fontWeight: "500"}}>
                    ПРИКУРИТЬ АВТО В ГОРОДЕ АЛМАТЫ 24/7 <br /> ЦЕНА ДОГОВОРНАЯ <br />
                </h1>
                <hr className="w-100 hr-gold" />
                <PhoneLink placement="hero" className="text-decoration-none">
                    <h1 className="display-2 text-center text-light mb-5" style={{fontWeight: "400"}}>
                        {PHONE_DISPLAY}
                    </h1>
                </PhoneLink>
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
