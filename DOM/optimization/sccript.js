// Create a fragment
let fragment = document.createDocumentFragment();

// Add 100 <p> elements to the fragment
for (let i = 0; i < 100; i++) {
    let p = document.createElement('p');
    p.textContent = `Paragraph ${i}`;
    fragment.appendChild(p);
}

// Append the whole fragment to the body
document.body.appendChild(fragment);
