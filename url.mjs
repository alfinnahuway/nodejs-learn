import { URL } from "url";

const pzn = new URL(
  "https://www.facebook.com/groups/803479556380457/?hoisted_section_header_type=recently_seen&multi_permalinks=6862761150452237&locale=id_ID"
);

console.info(pzn.toString());
console.info(pzn.protocol);
console.info(pzn.host);
console.info(pzn.pathname);
console.info(pzn.searchParams);
