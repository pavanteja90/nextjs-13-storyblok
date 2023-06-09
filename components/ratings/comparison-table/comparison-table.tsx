import Image from "next/image";

const getProducts = async (vertical: string): Promise<any> => {
  const options = {
    method: "POST",
    body: JSON.stringify({ vertical }),
    headers: {
      "Content-Type": "application/json",
    },
  };
  const res = await fetch(`${process.env.API_ENDPOINT}/api/mock`, options);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const starRatingImagery = [
  "https://www.canstarblue.com.au/wp-content/plugins/bluesr/images/blue_0star_small.png",
  "https://www.canstarblue.com.au/wp-content/plugins/bluesr/images/blue_1star_small.png",
  "https://www.canstarblue.com.au/wp-content/plugins/bluesr/images/blue_2star_small.png",
  "https://www.canstarblue.com.au/wp-content/plugins/bluesr/images/blue_3star_small.png",
  "https://www.canstarblue.com.au/wp-content/plugins/bluesr/images/blue_4star_small.png",
  "https://www.canstarblue.com.au/wp-content/plugins/bluesr/images/blue_5star_small.png",
];

const SRComparisonTable = async ({ blok }: { blok: any }) => {
  const data = await getProducts(blok.vertical);

  return (
    <table className="min-w-full text-left text-sm font-light">
      <thead className="border-b font-medium dark:border-neutral-500">
        <tr>
          <th scope="col" className="px-6 py-4 text-center">
            Related brand
          </th>
          {data.columns.map((col: any) => {
            return (
              <th key={col.label} scope="col" className="px-6 py-4 text-center">
                {col.label}
              </th>
            );
          })}
          <th scope="col" className="px-6 py-4 text-center">
            Shop online
          </th>{" "}
        </tr>
      </thead>
      <tbody>
        {data.records.map((record: any) => {
          return (
            <tr
              key={record.brandId}
              className="border-b dark:border-neutral-500"
            >
              <td className="whitespace-nowrap px-6 py-4" align="center">
                <Image
                  src={record.imageUrl}
                  alt={record.branda}
                  width={100}
                  height={35}
                  style={{
                    height: "35px",
                    width: "100px",
                    objectFit: "contain",
                  }}
                />
              </td>
              {record.columns.map((starValue: any, idx: number) => {
                return (
                  <td
                    key={idx}
                    className="whitespace-nowrap px-6 py-4"
                    align="center"
                  >
                    <Image
                      src={starRatingImagery[starValue]}
                      width={75}
                      height={14}
                      alt={starValue}
                    />
                  </td>
                );
              })}

              <td className="whitespace-nowrap px-6 py-4 text-center">
                <button
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  style={{ backgroundColor: "#25CCA8" }}
                >
                  Buy now
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SRComparisonTable;
