import Link from "next/link";
import Layout from "../components/Layout";
import { projects } from "../profile";

const Portfolio = () => (
  <Layout>
    <div className="row">
      <div className="col-md-12">
        <div className="card card-body bg-dark">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center text-light">Portfolio</h1>
            </div>
            {projects.map(({ title, description, image, link }, i) => (
              <div className="col-md-4 p-2" key={i}>
                <div className="card bg-light">
                  <div className="overflow">
                    <img
                      src={`/${image}`}
                      alt=""
                      className="card-img-top custom-card-img"
                    /> {/* Añade la clase "custom-card-img" */}
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-text">{description}</p>
                    <Link href={link} className="btn btn-primary">
                      Ver proyecto
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Portfolio;

