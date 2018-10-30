export default (props) => ({
    id: props.id            || Math.random(),
    name: props.name        || "Unknow",
    loginId: props.loginId  || Math.floor(Math.random()*1000),
    teas: props.teas        || [],
})