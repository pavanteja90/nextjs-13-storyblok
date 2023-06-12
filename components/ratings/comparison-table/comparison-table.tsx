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
    <div className="table-head-row">
      <TableHeadCell label="Rated brand" position="logo" />
      {columns.map((col: any, idx: number) => {
        return (
          <TableHeadCell
            key={col.label}
            label={col.label}
            position={`number-${idx}`}
          />
        );
      })}
      <TableHeadCell label="Shop online" position="cta" />
    </div>
  );
};

const TableHeadCell = ({
  label,
  position,
}: {
  label: string;
  position: string;
}) => {
  return (
    <div className={`table-head-cell align-center column-${position}`}>
      {label}
    </div>
  );
};

const TableDataRows = ({ records }: { records: any[] }) => {
  return (
    <>
      {records.map((record: any) => {
        return (
          <div key={record.brandId} className="table-data-row">
            <TableDataCellLogo record={record} />
            {record.columns.map((starValue: any, idx: number) => {
              return (
                <TableDataCell key={idx} starValue={starValue} position={idx} />
              );
            })}
            <TableDataCellCTA />
          </div>
        );
      })}
    </>
  );
};

const TableDataCellLogo = ({ record }: { record: any }) => {
  return (
    <div className={`table-data-cell align-center column-logo`}>
      <Image src={record.imageUrl} alt={record.brand} width={100} height={35} />
    </div>
  );
};

const TableDataCell = ({
  starValue,
  position,
}: {
  starValue: number;
  position: number;
}) => {
  return (
    <div className={`table-data-cell align-center column-number-${position}`}>
      <Image
        src={starRatingImagery[starValue]}
        width={75}
        height={14}
        alt={starValue.toString()}
      />
    </div>
  );
};

const TableDataCellCTA = () => {
  return (
    <div className="table-data-cell align-center column-cta">
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
