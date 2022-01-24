const csv = require('csv-parser');
const fs = require('fs');

canadapath = "./canada.txt"
usapath = "./usa.txt"

if (fs.existsSync(canadapath)){
    fs.unlinkSync(canadapath)
    
}
if (fs.existsSync(usapath)){
    fs.unlinkSync(usapath)
    
}
fs.createReadStream('input_countries.csv')
    .pipe(csv())
    .on('data', (row) => {
        if(row.country == "Canada")
            {
                fs.writeFileSync(canadapath, JSON.stringify(row),{flag:'a'})
            }
        if(row.country == "United States")
            {
                fs.writeFileSync(usapath, JSON.stringify(row),{flag:'a'})
            }
    })
    .on('end',() => {
        console.log('CSV file successfully processed');
    })

