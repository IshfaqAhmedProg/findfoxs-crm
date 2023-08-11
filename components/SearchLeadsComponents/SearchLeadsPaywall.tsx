import mockLeads from "@/shared/data/PlaceholderLeads.json";
import { Stack, useMediaQuery, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import TableItem from "../TableComponents/TableItem";
import TablePrimaryItem from "../TableComponents/TablePrimaryItem";
import SearchLeadsPrimaryItem from "./SearchLeadsPrimaryItem";
import SearchLeadsTableSecondaryItem from "./SearchLeadsTableSecondaryItem";
import CustomButton from "../CustomComponents/CustomButton";
import ReceiptLongRoundedIcon from "@mui/icons-material/ReceiptLongRounded";
import CustomBox from "../CustomComponents/CustomBox";
export default function SearchLeadsPaywall() {
  const theme = useTheme();

  mockLeads.length = 3;
  const tablePrimaryItems = (
    <>
      {mockLeads.length != 0 &&
        mockLeads.map((lead) => {
          return (
            <TablePrimaryItem key={lead._id} id={lead._id}>
              <SearchLeadsPrimaryItem content={lead} />
            </TablePrimaryItem>
          );
        })}
    </>
  );
  const tableSecondaryItems = (
    <>
      {mockLeads.length != 0 &&
        mockLeads.map((lead) => {
          return (
            <TableItem key={lead._id}>
              <SearchLeadsTableSecondaryItem content={lead} />
            </TableItem>
          );
        })}
    </>
  );
  return (
    <CustomBox
      boxProps={{
        width: "100%",
        position: "relative",
        bgcolor: "var(--white)",
      }}
    >
      <Stack
        position={"absolute"}
        top={"0"}
        left={"50%"}
        sx={{
          isolation: "isolate",
          transform: "translate(-50%,0%)",
          ":before": {
            content: '""',
            position: "absolute",
            height: "90%",
            width: "200%",
            top: 0,
            bgcolor: "var(--white)",
            // bgcolor: "red",
            filter: "blur(20px)",
            zIndex: -1,
            borderRadius: "0% 0% 50% 50%",
          },
        }}
        zIndex={5}
        pt={7}
        alignItems={"center"}
        gap={2}
      >
        <Typography variant="h3" color={"var(--primary)"}>
          Lookin for{" "}
          <span style={{ color: "var(--accent)", fontSize: "2.5rem" }}>
            more
          </span>{" "}
          leads?
        </Typography>
        <Typography maxWidth={"35ch"} fontWeight={"bold"} textAlign={"center"}>
          Get access to more than 10,000+ leads and more features by upgrading
          to one of our paid plans.
        </Typography>
        <CustomButton
          kind="secondary"
          buttonProps={{ startIcon: <ReceiptLongRoundedIcon /> }}
        >
          View Plans
        </CustomButton>
      </Stack>
      <Stack
        direction={"row"}
        justifyContent="center"
        sx={{ pointerEvents: "none", filter: "blur(4px)" }}
      >
        <Stack
          pt={2}
          width={
            useMediaQuery(theme.breakpoints.down("sm")) ? "100%" : "inherit"
          }
        >
          {tablePrimaryItems}
        </Stack>
        <Stack
          display={
            useMediaQuery(theme.breakpoints.down("sm")) ? "none" : "block"
          }
          width="80%"
          height={"fit-content"}
          sx={{ overflowX: "auto", whiteSpace: "nowrap", overflowY: "hidden" }}
          py={2}
        >
          {tableSecondaryItems}
        </Stack>
      </Stack>
    </CustomBox>
  );
}
