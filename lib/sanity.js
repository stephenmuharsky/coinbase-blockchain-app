import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "mksajuwu",
  dataset: "production",
  apiVersion: "2021-03-25",
  token:
    "skYF7plMS67vpuoa70grqGoxlZRWVOdrz1pdLrSWksIwlDSOWolCaFntDrAelm2LuJCUdltCO2r0nUhykYSRk5hEqXansBIsiL1GoDsfaYtfe5k1k0d9iQa7kA1Rb3eaLALpXaRD9RMtCkTJJ8dO4lC3E9CxWlg4Sl4Iho4DLEuBagiVyvj7",
  useCdn: false,
});
