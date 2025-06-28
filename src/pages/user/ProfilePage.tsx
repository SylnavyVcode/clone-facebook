import UserComponent from "../../components/user/TheUserComponent";

const User = () => {
  return (
    <>
      <UserComponent></UserComponent>
    </>
  );
};

export default User;


// function Portfolio() {
//     return (
//         <div className="bg-gray-100 text-gray-800">
//             {/* Header Section */}
//             <header className="bg-blue-600 text-white py-6">
//                 <div className="container mx-auto px-4">
//                     <h1 className="text-3xl font-bold">Sylnavy V. MABIKA M.</h1>
//                     <p className="text-lg">Développeur Fullstack | TypeScript, Tailwind CSS | Bootstrap 5</p>
//                 </div>
//             </header>

//             {/* Main Content */}
//             <main className="container mx-auto px-4 mt-6">
//                 {/* About Section */}
//                 <section id="about" className="bg-white p-6 rounded shadow mb-6">
//                     <h2 className="text-2xl font-semibold mb-4">À Propos de Moi</h2>
//                     <p>
//                         Développeur fullstack avec 2 ans d'expérience, je suis spécialisé dans les technologies modernes 
//                         telles que Vue.js, Tailwind CSS, Express.js, Node.js, et TypeScript. J'ai travaillé sur des projets complexes, 
//                         notamment un ERP innovant et un middleware connectant ClickUp et Squash dans les deux sens.
//                     </p>
//                     <p className="mt-4">
//                         Actuellement, j'approfondis mes compétences sur Nest.js et React.js pour offrir des solutions encore 
//                         plus performantes à mes clients.
//                     </p>
//                 </section>

//                 {/* Skills Section */}
//                 <section id="skills" className="bg-white p-6 rounded shadow mb-6">
//                     <h2 className="text-2xl font-semibold mb-4">Compétences</h2>
//                     <ul className="list-disc list-inside space-y-2">
//                         <li>Frameworks front-end : Vue.js, React.js</li>
//                         <li>Frameworks back-end : Express.js, Nest.js</li>
//                         <li>Styling : Tailwind CSS, Bootstrap 5</li>
//                         <li>Base de données : MongoDB, Sqlite, MariaDB</li>
//                         <li>Tests logiciels : Écriture de tests depuis 2 ans</li>
//                         <li>Middleware : Intégration entre ClickUp et Squash</li>
//                     </ul>
//                 </section>

//                 {/* Projects Section */}
//                 <section id="projects" className="bg-white p-6 rounded shadow mb-6">
//                     <h2 className="text-2xl font-semibold mb-4">Projets Réalisés</h2>
//                     <div className="space-y-4">
//                         <div className="border p-4 rounded">
//                             <h3 className="text-xl font-bold">ERP Innovant</h3>
//                             <p>
//                                 Développement d'un ERP complet avec Vue.js, Tailwind CSS, et Express.js, MongoDB. Intégration de 
//                                 fonctionnalités avancées pour la gestion d'entreprise.
//                             </p>
//                         </div>
//                         <div className="border p-4 rounded">
//                             <h3 className="text-xl font-bold">Middleware ClickUp-Squash</h3>
//                             <p>
//                                 Création d'un middleware bidirectionnel entre les spaces ClickUp et les exigences Squash, 
//                                 utilisant Vue.js, Tailwind CSS, Express.js, et MariaDB.
//                             </p>
//                         </div>
//                         <div className="border p-4 rounded">
//                             <h3 className="text-xl font-bold">Tests Logiciels</h3>
//                             <p>
//                                 Écriture et mise en place de tests automatisés pour assurer la qualité logicielle sur plusieurs 
//                                 projets d'envergure.
//                             </p>
//                         </div>
//                     </div>
//                 </section>

//                 {/* Contact Section */}
//                 <section id="contact" className="bg-white p-6 rounded shadow">
//                     <h2 className="text-2xl font-semibold mb-4">Contactez-moi</h2>
//                     <form action="#" method="POST" className="space-y-4">
//                         <div>
//                             <label htmlFor="name" className="block text-sm font-medium">Nom</label>
//                             <input type="text" id="name" name="name" required
//                                    className="mt-1 p-2 block w-full border rounded focus:ring focus:ring-blue-300" />
//                         </div>
//                         <div>
//                             <label htmlFor="email" className="block text-sm font-medium">Email</label>
//                             <input type="email" id="email" name="email" required
//                                    className="mt-1 p-2 block w-full border rounded focus:ring focus:ring-blue-300" />
//                         </div>
//                         <div>
//                             <label htmlFor="message" className="block text-sm font-medium">Message</label>
//                             <textarea id="message" name="message"  required
//                                       className="mt-1 p-2 block w-full border rounded focus:ring focus:ring-blue-300"></textarea>
//                         </div>
//                         <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
//                             Envoyer
//                         </button>
//                     </form>
//                 </section>
//             </main>

//             {/* Footer */}
//             <footer className="bg-blue-600 text-white py-4 mt-6">
//                 <div className="container mx-auto px-4 text-center">
//                     <p>&copy; 2025 Sylnavy V. MABIKA M. Tous droits réservés.</p>
//                 </div>
//             </footer>
//         </div>
//     );
// }

// export default Portfolio;

