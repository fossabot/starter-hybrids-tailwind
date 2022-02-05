import test from "ava"
import { withPage } from "../ava/helpers.js"



test("page should have a H1 element", withPage, async (t, page, url) => {
	await page.goto(url)
	t.not(await page.$('h1'), null);
})