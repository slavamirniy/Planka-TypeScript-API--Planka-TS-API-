import { authenticate } from "./PlankaApi.js";


async function main() {
    console.log('start');
    const app = await authenticate('http://localhost:3000', 'demo@demo.demo', 'demo');
    const projects = await app.projects.get('123');
    app.projects.update({
        ...projects.item,
        name: 'changed'
    })
    console.log(projects);
}

main();
