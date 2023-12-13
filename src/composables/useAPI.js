import { ref } from 'vue'
import axios from 'axios'

const monsters = ref([])
const pages = ref(1)
const loading = ref(false)
const activePage = ref(1)
const pageSize = ref(8)

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  auth: {
    username: import.meta.env.VITE_API_USERNAME,
    password: import.meta.env.VITE_API_PASSWORD,
  },
})

const getMonsters = async () => {
    loading.value = true
    const { data, headers } = await api.get('/api/monsters', {
        params: {
            page: activePage.value,
            size: pageSize.value,
        },
    })

    monsters.value = data
  pages.value = Number(headers['x-total-pages']) || 1
  loading.value = false
}

const getDepartment = async (departmentId) => {
  const { data } = await api.get(`/api/departments/${departmentId}`)
  return data
}


const useAPI = () => {
  return { monsters, pages, activePage, loading, pageSize, getmonsters, getDepartment }
}


export default useAPI