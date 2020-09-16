// 02 - Compressing with Deflate
const fs = require("fs");
const zlib = require("zlib");
const output_file = "./output/content.deflated";
const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Montes nascetur ridiculus mus mauris. Ut tortor pretium viverra suspendisse potenti nullam ac tortor. Cras fermentum odio eu feugiat pretium nibh ipsum. Dictum fusce ut placerat orci nulla pellentesque dignissim enim sit. Felis eget nunc lobortis mattis aliquam. Ac placerat vestibulum lectus mauris ultrices eros in cursus. Interdum varius sit amet mattis vulputate. Nibh cras pulvinar mattis nunc sed blandit. Tristique nulla aliquet enim tortor at auctor urna nunc id. Sed euismod nisi porta lorem mollis aliquam ut porttitor. Leo integer malesuada nunc vel. Nulla aliquet enim tortor at auctor. Blandit massa enim nec dui nunc mattis enim. Egestas tellus rutrum tellus pellentesque eu. Nec dui nunc mattis enim ut tellus elementum sagittis. Adipiscing bibendum est ultricies integer quis. Tortor at risus viverra adipiscing at in tellus integer feugiat. Arcu vitae elementum curabitur vitae nunc sed velit. Ac tortor dignissim convallis aenean et tortor at. Suscipit tellus mauris a diam maecenas. Nulla aliquet enim tortor at auctor urna nunc id. Venenatis cras sed felis eget velit aliquet sagittis id.`;

zlib.deflate(content, after_compress);
function after_compress(err, buffer){
    if(err){
        console.log(err);
    }
    else{
        fs.writeFile(output_file, buffer, (err) => after_write(err, buffer.length));
    }
}

function after_write(err, new_size){
    if(err){
        console.log(err);
    }
    else{
        console.log(`File Written to "${output_file}"`);
        console.log(`Original Size: ${content.length}`);
        console.log(`New Size: ${new_size}`);
    }
}
