"use client"
import Link from "next/link";

export default function Home() {

    return (
        <div>
            <strong>主页</strong>
            <br />
            <br />
            <ul>
                <li><Link href={`/test#id`}>/test</Link>
                </li>
            </ul>
        </div>
    )
}
