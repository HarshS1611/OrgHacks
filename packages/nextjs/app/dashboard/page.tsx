export default function Dashboard() {
  return (
    <div className="flex flex-col justify-center w-full">
      <div className="flex justify-center gap-5 mt-10">
        <a
          href="#"
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Number of Hackers who prefereed venue
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">256</p>
        </a>

        <a
          href="#"
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Highest voted venue</h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">Taj Hotel. Budget allocated $700.</p>
        </a>

        <a
          href="#"
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Number of hackers who preferred food
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">531</p>
        </a>

        <a
          href="#"
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Highest voted food items
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Mughali Chicken as Main course, paneer tokka as starters and ice cream got 231, 105, 44 votes respectively
          </p>
        </a>
      </div>

      <p className="flex justify-center text-2xl mt-10 font-bold">Leaderboard</p>

      <div className="flex justify-center mx-24 mt-10 relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Hacker name
              </th>
              <th scope="col" className="px-6 py-3">
                Hacks attended
              </th>
              <th scope="col" className="px-6 py-3">
                Acheivements
              </th>
              <th scope="col" className="px-6 py-3">
                Reputation score
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Pranav Desai
              </th>
              <td className="px-6 py-4">21</td>
              <td className="px-6 py-4">12</td>
              <td className="px-6 py-4">2999</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Kapil dev
              </th>
              <td className="px-6 py-4">35</td>
              <td className="px-6 py-4">15</td>
              <td className="px-6 py-4">3456</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Rohit
              </th>
              <td className="px-6 py-4">42</td>
              <td className="px-6 py-4">20</td>
              <td className="px-6 py-4">5678</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Ajay
              </th>
              <td className="px-6 py-4">28</td>
              <td className="px-6 py-4">18</td>
              <td className="px-6 py-4">91011</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Sanjay
              </th>
              <td className="px-6 py-4">30</td>
              <td className="px-6 py-4">14</td>
              <td className="px-6 py-4">121314</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
