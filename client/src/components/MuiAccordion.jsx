import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Stack,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

/**
 * Props:
 * - data: array of sections
 * - titleKey: key to show in accordion title (e.g., "name")
 * - itemsKey: key that contains array of items (e.g., "employees")
 * - itemClick : for sending a callback function for the items (e.g : navigation functions)
 */
const MuiAccordion = ({
  data = [],
  titleKey = "name",
  itemsKey = "items",
  itemClick,
}) => {

  const sortItems = (a, b) => {
    const isAdminA = a.role?.some((r) =>
      r.roleTitle.toLowerCase().includes("admin")
    );
    const isAdminB = b.role?.some((r) =>
      r.roleTitle.toLowerCase().includes("admin")
    );

    if (isAdminA && !isAdminB) return -1;
    if (!isAdminA && isAdminB) return 1;
    return a.firstName.localeCompare(b.firstName);
  };

  const renderItem = (emp) => (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p={1}
      border="1px solid #e0e0e0"
      borderRadius={2}
    >
      <Box>
        <Typography fontWeight={500}>
          {emp.firstName} {emp.lastName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {emp.role?.map((r) => r.roleTitle).join(", ")}
        </Typography>
      </Box>

      <div onClick={() => itemClick?.(emp)} className="p-2 border-default border-black rounded-md text-content flex items-center">
        <IoIosArrowForward />
      </div>
    </Box>
  );

  return (
    <Box>
      {data.map((section) => {
        let items = section[itemsKey] || [];
        items = [...items].sort(sortItems);

        return (
          <Accordion key={section._id}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight="bold">{section[titleKey]}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Stack spacing={2}>
                {items.map((item) => (
                  <Box key={item._id}>{renderItem(item)}</Box>
                ))}
              </Stack>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
};

export default MuiAccordion;
