<template>
  <div class="w-screen h-screen flex flex-col">
    <div class="h-18 p-2 relative">
      <div class="w-full h-full bg-gray rounded-xl p-2">
        <div class="h-full w-full flex items-center">
          <div class="text-blue-800 uppercase tracking-tight font-mono antialiased hover:underline hover:animate-pulse hover:cursor-pointer ">
            <NuxtLink to="/">
              note_share
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full flex-auto p-2">
      <slot />
    </div>
  </div>
</template>
