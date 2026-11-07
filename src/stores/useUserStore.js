import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore
(
	'user',
	() =>
	{
		const ud = ref({current: "", users: {}})
		return { ud }
	},
	{ persist: true }
)