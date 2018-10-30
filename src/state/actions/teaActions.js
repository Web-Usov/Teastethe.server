import store from '../store'
import {Tea} from '../models'
import {INFO} from '../../consts'

export const addTea = (data, cb) => {
    const {name} = data
    const str = ""
    str.length
    if(name.length > 16 || name.length < 3)
        return cb({error:"Name must be less than 16 characters and longer than 3 characters"})
    if(findTeaByName(name)!==null)
        return cb({error:"This tea already has in list"})
    const tea = new Tea(data)
    store.teas[tea.id] = tea
    store.teasId.push(tea.id)
    console.log(INFO,"Add new tea", tea.name)
    cb({
        error:null,
        tea:store.teas[tea.id]
    })

}


export const findTeaByName = (name) => {
    let findTea = null
    store.teasId.map(teaId => {
        const tea = store.teas[teaId]
        if(tea.name.toString() === name.toString())
            return findTea = tea                
    })
    if(findTea) return findTea
        else return null
}