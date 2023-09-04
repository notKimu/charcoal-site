// This could be a database call or any
// It is run by the server before loading the page to the user
import downloads from "../../../static/json/downloads.json";
 
/** @type {import('./$types').PageServerLoad} */
export async function load() {
  return {
    downloads
  };
}