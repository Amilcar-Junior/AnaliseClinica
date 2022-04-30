

 export const handleSearch = (query, data, setNewData) => {
    if (query) {
        const newData = data.filter((data) => {
            let matches = true;

            const properties = ['name_praia'];
            let containsQuery = false;

            properties.forEach((property) => {
                if (data[property].toString().toLowerCase().includes(query.toString().toLowerCase())) {
                    containsQuery = true;
                }
            });

            if (!containsQuery) {
                matches = false;

            }
            return matches;
        });
        if (newData.length) {
            setNewData(newData);
        }
    }
};
