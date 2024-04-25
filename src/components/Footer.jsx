import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    let githubLink = "https://github.com/sailendrachettri";

    useEffect(() => {
        let footerYear = document.getElementById("year");
        let date = new Date();

        footerYear.innerText = date.getFullYear();
    }, [])


    return (
        <footer className="pt-5">
            <div className="bg-body-tertiary text-center py-4">
                <div className="my-1 text-secondary">Developed with ❤ by <Link to={githubLink} className="text-decoration-none">Sailendra</Link> </div>
                <div className="text-secondary">Copyright &copy; <span id="year">0000</span> All rights reserved</div>
            </div>
        </footer>
    );
}