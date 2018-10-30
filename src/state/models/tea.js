export default (props) => ({
    id: Math.random(),
    name: props.name         || "Unknow tea",
    type: props.type         || "Default",
    rating: props.rating     || 0.0
})