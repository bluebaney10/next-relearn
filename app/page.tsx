import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h2>Basic</h2>
      <ul>
        <li>
          <Link href="/basic/fetchdata/">
            <h3>Fech Data</h3>
          </Link>
        </li>
        <li>
          <Link href="/basic/caching/">
            <h3>Caching</h3>
          </Link>
        </li>
        <li>
          <Link href="/basic/cssmodule/">
            <h3>Css module</h3>
          </Link>
        </li>
        <li>
          <Link href="/basic/routedynamic/users/1">
            <h3>Route-dynamic</h3>
          </Link>
        </li>
        <li>
          <h3>Catch all Segment</h3>
          <Link href="/basic/routesegment/products">
            <h4>Route /products</h4>
          </Link>
          <Link href="/basic/routesegment/products/grocery/dairy/milk">
            <h4>Rout /products/grocery/dairy/milk</h4>
          </Link>
        </li>
        <li>
          <Link href="/basic/querystringparameter/products?sortOrder=name">
            <h3>Accessing Query String Parameter</h3>
          </Link>
        </li>
        <li>
          <Link href="/basic/sorttable/">
            <h3>Sort Table</h3>
          </Link>
        </li>
        <li>
          <Link href="/basic/router/">
            <h3>Router</h3>
          </Link>
        </li>
        <li>
          <Link href="/basic/loadingui/?sortOrder=name">
            <h3>Loading UI</h3>
          </Link>
        </li>
      </ul>
    </div>
  );
}
