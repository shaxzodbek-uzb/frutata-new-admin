<template>
  <main class="w-full flex-grow p-6">
    <h1 class="text-3xl text-black pb-6">Dashboard</h1>

    <div class="w-full h-full">
      <div class="bg-white overflow-auto">
        <table class="min-w-full bg-white">
          <thead class="bg-gray-800 text-white">
            <tr>
              <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Name</th>
              <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Last name</th>
              <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Phone</th>
              <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Email</th>
            </tr>
          </thead>
          <tbody class="text-gray-700">
            <tr>
              <td class="w-1/3 text-left py-3 px-4">Lian</td>
              <td class="w-1/3 text-left py-3 px-4">Smith</td>
              <td class="text-left py-3 px-4">
                <a class="hover:text-blue-500" href="tel:622322662">622322662</a>
              </td>
              <td class="text-left py-3 px-4">
                <a class="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a>
              </td>
            </tr>
            <tr class="bg-gray-200">
              <td class="w-1/3 text-left py-3 px-4">Emma</td>
              <td class="w-1/3 text-left py-3 px-4">Johnson</td>
              <td class="text-left py-3 px-4">
                <a class="hover:text-blue-500" href="tel:622322662">622322662</a>
              </td>
              <td class="text-left py-3 px-4">
                <a class="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a>
              </td>
            </tr>
            <tr>
              <td class="w-1/3 text-left py-3 px-4">Oliver</td>
              <td class="w-1/3 text-left py-3 px-4">Williams</td>
              <td class="text-left py-3 px-4">
                <a class="hover:text-blue-500" href="tel:622322662">622322662</a>
              </td>
              <td class="text-left py-3 px-4">
                <a class="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a>
              </td>
            </tr>
            <tr class="bg-gray-200">
              <td class="w-1/3 text-left py-3 px-4">Isabella</td>
              <td class="w-1/3 text-left py-3 px-4">Brown</td>
              <td class="text-left py-3 px-4">
                <a class="hover:text-blue-500" href="tel:622322662">622322662</a>
              </td>
              <td class="text-left py-3 px-4">
                <a class="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a>
              </td>
            </tr>
            <tr>
              <td class="w-1/3 text-left py-3 px-4">Lian</td>
              <td class="w-1/3 text-left py-3 px-4">Smith</td>
              <td class="text-left py-3 px-4">
                <a class="hover:text-blue-500" href="tel:622322662">622322662</a>
              </td>
              <td class="text-left py-3 px-4">
                <a class="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a>
              </td>
            </tr>
            <tr class="bg-gray-200">
              <td class="w-1/3 text-left py-3 px-4">Emma</td>
              <td class="w-1/3 text-left py-3 px-4">Johnson</td>
              <td class="text-left py-3 px-4">
                <a class="hover:text-blue-500" href="tel:622322662">622322662</a>
              </td>
              <td class="text-left py-3 px-4">
                <a class="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a>
              </td>
            </tr>
            <tr>
              <td class="w-1/3 text-left py-3 px-4">Oliver</td>
              <td class="w-1/3 text-left py-3 px-4">Williams</td>
              <td class="text-left py-3 px-4">
                <a class="hover:text-blue-500" href="tel:622322662">622322662</a>
              </td>
              <td class="text-left py-3 px-4">
                <a class="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a>
              </td>
            </tr>
            <tr class="bg-gray-200">
              <td class="w-1/3 text-left py-3 px-4">Isabella</td>
              <td class="w-1/3 text-left py-3 px-4">Brown</td>
              <td class="text-left py-3 px-4">
                <a class="hover:text-blue-500" href="tel:622322662">622322662</a>
              </td>
              <td class="text-left py-3 px-4">
                <a class="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
