const ComentForm = ({ articleId, onAdd }) => {
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!author || !content) return;
        onAdd({ articleId, author, content, createdAt: new Date().toISOString() });
        setAuthor('');
        setContent('');
    };
    return (
        <form onSubmit={handleSubmit}>
            <input value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Nom" />
            <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Commentaire..." />
            <button type="submit">Ajouter</button>
        </form>
    );
};