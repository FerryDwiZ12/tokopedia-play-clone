## This is Final term from GIGIH 3.0 Fullstack Developer 2023

##### [!IMPORTANT] : this README.md only for Server/Backend !!!.

### About this project :

This project about tokopedia play clone, this is final term from GIGIH 3.0
in this project build with MERN stack : (' Mongoodb, Express, ReactJs and NodeJS ')

And I try custom :

- UI Design
- User Flow
- Css I use Tailwindcss
- Icon use React-Icons
- JWT

you can site this website for complate :
[Flow Pages](https://www.figma.com/file/AuJFeq5AfpTb3uKFumY4ic/Final-Project-GIGIH-3.0?type=whiteboard&node-id=0%3A1&t=T2oQsInzIN29FhPF-1/).

### Fitures in this project :

- Login (with JWT Token)
- Register (bcrypt password)
- Get All Video
- Create Video by userId
- Get All Product by videoId
- Create Product by videoId
- Create Comment by userId
- Get Comment by videoId and get user data
- Search by Title Video
- Show profile Picture and Username on Navbar
- realtime comment with socket.io

##### [!NOTE] : first you can clone this project :

```bash
git clone ( Https / SSH or Github CLI - link)
```

##### [!NOTE] : to download the latest version of npm, on the command line, run the following command:

```bash
npm install -g npm
```

##### [!NOTE] : to install this project depedencies, run the following command:

```bash
npm install
```

### How to run in local

##### _NOTED_ : How run the project, run the following command:

```bash
npm dev / npm run dev
```

##### [!NOTE] : Endpoint u can access after login :

- /login
- /register
- /home ( u can search to in home )
- /detail/:videoId (u can get products, get comments by videoId, create comment by videoId)


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
