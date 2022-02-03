import express from "express";
const app = express();
require("dotenv").config();
const db = require("./db");
const PORT = process.env.PORT || 9000;
// const router = require("./router/router");

app.listen(PORT, () => {
	console.log(`Listening at port ${PORT}`);
});

app.use(express.json());

//Routes
// app.use("/", router);
class Student {
	name: string;
	branch: string;
	constructor(name: string, branch: string) {
		this.name = name;
		this.branch = branch;
	}
}
app.post("/student", async (req, res) => {
	try {
		const { name, branch } = req.body;
		const data = new Student(name, branch);
		// console.log(data);
		const newStud = await db.query(
			"INSERT INTO public.info (name,branch) VALUES ($1,$2) RETURNING *",
			[data.name, data.branch]
		);
		res.status(200).send(newStud.rows[0]);
	} catch (err) {
		console.log(err);
	}
});
app.get("/student", async (req, res) => {
	try {
		const stud = await db.query("SELECT * FROM public.info");
		res.status(200).send(stud.rows);
	} catch (err) {
		console.log(err);
	}
});
app.get("/student/:id", async (req, res) => {
	try {
		const stud = await db.query("SELECT * FROM public.info WHERE id=$1", [
			req.params.id,
		]);
		res.status(200).send(stud.rows);
	} catch (err) {
		console.log(err);
	}
});
app.put("/student/:id", async (req, res) => {
	try {
		const updateStud = await db.query(
			"UPDATE public.info SET branch=$1 WHERE id=$2",
			[req.body.branch, req.params.id]
		);
		res.status(200).send({ message: "Branch updated" });
	} catch (err) {
		console.log(err);
	}
});
app.delete("/student/:id", async (req, res) => {
	try {
		const stud = await db.query("DELETE FROM public.info WHERE id=$1", [
			req.params.id,
		]);
		res.status(200).send({ message: "Deleted" });
	} catch (err) {
		console.log(err);
	}
});
