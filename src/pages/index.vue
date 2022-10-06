<template>
  <div>
    <h1 class="leading-relaxed font-mono mb-4">
      Welcome to the NOTE_SHARE
    </h1>
    <div class="flex flex-row w-full">
      <div class="flex-1 p-4">
        <div class="font-mono text-center">
          <NuxtLink to="/new">
            <button class="btn">
              New
            </button>
          </NuxtLink>
        </div>
      </div>
      <div class="flex-1 p-4">
        <div class="font-mono text-center">
          <button class="btn">
            Load
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
