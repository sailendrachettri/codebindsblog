import { useEffect } from "react";

export default function Footer() {
    useEffect(() => {
        let footerYear = document.getElementById("year");
        let date = new Date();

        footerYear.innerText = date.getFullYear();
    }, [])


    return (
        <footer>
            <div className="bg-body-tertiary text-center py-4">
                Copyright &copy; <span id="year">0000</span> All rights reserved
            </div>
        </footer>
    );
}