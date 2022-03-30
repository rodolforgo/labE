export const irHome = (navigate) => {
    navigate("/");
}

export const irCadastro = (navigate) => {
    navigate("/cadastro")
}

export const irLogin = (navigate) => {
    navigate("/login");
}

export const irFeed = (navigate) => {
    navigate("/feed");
}

export const irPosts = (navigate, id) => {
    navigate(`/post/${id}`);
}

export const irBusca = (navigate) => {
    navigate(`/busca`);
}

export const irDestaques = (navigate) => {
    navigate(`/destaques`);
}

export const irNovoPost = (navigate) => {
    navigate(`/novo-post`);
}