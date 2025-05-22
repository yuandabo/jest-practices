<template>
    <div class="form">
        <h1>This is an form page</h1>
        <div>
            <label htmlFor="username-input">Username</label>
            <input id="username-input" v-model="input" />
            <button @click="handleClick">
                提交
            </button>
            <span>{{ status }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const status = ref('')
const input = ref('')
const handleClick = () => {
    const username = input.value;
    if (!username) {
        status.value = "用户名不能为空"
        return
    }
    status.value = "提交成功"
}
</script>

<style></style>
