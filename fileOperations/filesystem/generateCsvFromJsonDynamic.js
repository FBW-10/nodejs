const fs = require("fs");
const httpRequest = require("request");

httpRequest( `https://spielhoe.shaula.uberspace.de/drive/out4.json`, (error, httpResponse, body) => {
    body = JSON.parse(body);
    //body = body.replace(/\\n/gmu, "")
    body = body.filter(i => i.noxevent > 10)
    let string = Object.keys(body[0]).join(",") + "\n";
    body.forEach(post => {
      string += Object.values(post).join(",").replace(/\n/g, " ") + "\n";
    });
    fs.writeFile(`./dynamic_${(new Date()).toISOString().slice(0, -14)}.csv`, string, () => console.log(`Im done with ${body.length} lines`));
  }
)
