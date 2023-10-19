import Link from "next/link";
import Layout from "../components/Layout";
import { experiences, skills } from "../profile";

const Index = () => (
    <Layout>
        <header className="row">
            <div className="col-md-12">
                <div className="card card-body bg-secondary">
                    <div className="row">
                        <div className="col-md-3">
                            <img src="foto-cv.jpg" alt="foto" className="img-fluid" style={{ maxWidth: '150px', height: 'auto', margin: '0' }} />
                        </div>
                        <div className="col-md-8">
                            <h1>Desumma Gian Franco Javier</h1>
                            <h3>FullStack Developer</h3>
                            <p>
                                Mi experiencia tecnológica más destacada es la de es de este año, ya que me desempeñe como estudiante de desarrollador Full Stack en Henry,
                                que me ayudo a perfeccionar el trabajar en equipo y mis bases en Front-end, Back-end.
                                Conocimientos en metodologías ágiles, GIT, estructura de datos, algoritmos, frameworks CSS,
                                Tengo experiencia en desarrollo de Front End y Back End con JavaScript. Poseo gran iniciativa,
                                versatilidad, curiosidad, trabajo en equipo. Nivel de Inglés: b2.
                            </p>
                            <Link href="/contacto">Contactame</Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <div className="row py-2">
            <div className="col-md-4">
                <div className="card bg-light">
                    <div className="card-body">
                        <h1> skill</h1>
                        {
                            skills.map(({ skill, percentage }, i) => (
                                <div className="py-3" key={i}>
                                    <h5>{skill}</h5>
                                    <div className="progress">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{ width: `${percentage}%` }}>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
            <div className="col-md-8">
                <div className="card bg-light ">
                    <div className="card-body">
                        <h1>Experiencia</h1>

                        <ul>
                            {
                                experiences.map(({ title, description, from, to }, index) => (
                                    <li key={index}>
                                        <h3>{title}</h3>
                                        <h5>{from}-{to}</h5>
                                        <p>{description}</p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
);

export default Index;
