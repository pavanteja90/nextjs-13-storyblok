import Image from "next/image";
import "./comparison-table.scss";

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
  "http://localhost:3000/rating-icons/blue_0star.png",
  "http://localhost:3000/rating-icons/blue_1star.png",
  "http://localhost:3000/rating-icons/blue_2star.png",
  "http://localhost:3000/rating-icons/blue_3star.png",
  "http://localhost:3000/rating-icons/blue_4star.png",
  "http://localhost:3000/rating-icons/blue_5star.png",
];

const TableHeadRows = ({ columns }: { columns: any[] }) => {
  return (
    <div className="table-head-row align-center">
      <TableHeadCell label="Rated brand" />
      {columns.map((col: any) => {
        return <TableHeadCell key={col.label} label={col.label} />;
      })}
      <TableHeadCell label="Shop online" />
    </div>
  );
};

const TableHeadCell = ({ label }: { label: string }) => {
  return <div className="table-head-cell align-center">{label}</div>;
};

const TableDataRows = ({ records }: { records: any[] }) => {
  return (
    <>
      {records.map((record: any) => {
        return (
          <div key={record.brandId} className="table-data-row align-center">
            <TableDataCellLogo record={record} />
            {record.columns.map((starValue: any, idx: number) => {
              return (
                <TableDataCell key={idx} starValue={starValue} />
              );
            })}
            <TableDataCellCTA columns={[]} />
          </div>
        );
      })}
    </>
  );
};

const TableDataCellLogo = ({ record }: { record: any }) => {
  return (
    <div className="table-data-cell align-center">
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
    </div>
  );
};

const TableDataCell = ({ starValue }: { starValue: number }) => {
  return (
    <div className="table-data-cell align-center">
      <Image
        src={starRatingImagery[starValue]}
        width={75}
        height={14}
        alt={starValue.toString()}
      />
    </div>
  );
};

const TableDataCellCTA = ({ columns }: { columns: any[] }) => {
  return (
    <div className="table-data-cell">
      <button>Buy now</button>
    </div>
  );
};

// Entry point component exposed to StoryBlok
const SRComparisonTable = async ({ blok }: { blok: any }) => {
  const data = await getProducts(blok.vertical);
  return (
    <div className="sr-comparison-table">
      <TableHeadRows columns={data.columns} />
      <TableDataRows records={data.records} />
    </div>
  );
};

export default SRComparisonTable;
