module.exports = {
    createAuthor: async(name) => {
        const author = new Author({
            _id: new mongoose.Types.ObjectId(),
            name: name
        });
        try {
            await AuthorService.checkauthorSalesStatus();
            await BookService.checkAvailableBooksByAuthor(name);
            const newAuthorEntry = await author.save()
            return newAuthorEntry;
        } catch (error) {
            throw error
        }
    },

    getAuthor: async(id) => {
        // ..
    },

    getAllAuthors: async() => {
        // ...
    }
}