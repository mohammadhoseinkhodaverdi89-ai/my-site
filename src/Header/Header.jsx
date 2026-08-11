import { useState } from "react";
function Header() {
    const [dark, setDark] = useState(true)
    return (
        <div>
            <div>
                <h2>
                    MH
                </h2>
            </div>
            <div>
                <ul>
                    <li>Home</li>
                    <li>Favorite</li>
                    <li>Context</li>
                    <li>About</li>
                </ul>
            </div>
        </div>
    )
}
export default Header