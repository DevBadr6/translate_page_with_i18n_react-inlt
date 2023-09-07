import { getMessage } from "../../getMessages";

import Link from "next/link";
import About from './aboutUS/about'

export default async function Home({ params }) {

  const lang = await getMessage(params.lang);

  console.log(params, "params for home");

  return (
    <div>

      <ul>
        <li>
          <Link href="/fr">Francais</Link>
        </li>
        <li>
          <Link href="/en">English</Link>
        </li>
        {/* <li>
          <Link href="/about">Go to About With translate</Link>
        </li> */}
      </ul>

      <About params={params} />

      <div className="info">
        <h1>{lang.Index.title}</h1>
        <p>{lang.Index.subtext}</p>
      </div>
    </div>
  );
}
