export const fetchTransit = () =>
    fetch('http://localhost:3000/api/transit')
        .then(res => res.json());
