import { Box } from "@mui/material";
import CustomModal from "../../../components/CustomModal";
import { IoCloseCircleOutline } from "react-icons/io5";
import PrimaryButton from "../../../components/PrimaryButton";
import { useNavigate } from "react-router-dom";

interface CancelModalProps {
  modalOpen: boolean;
  setModalOpen: (value: boolean) => void;
}

const CancelModal = ({ modalOpen, setModalOpen }: CancelModalProps) => {
  const navigate = useNavigate();

  return (
    <Box>
      <CustomModal open={modalOpen}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            cursor: "pointer",
            fontSize: 30,
            color: "#00739a",
            padding: "16px 16px 0",
          }}
          onClick={() => setModalOpen(false)}
        >
          <IoCloseCircleOutline />
        </Box>
        <Box
          sx={{
            padding: "12px 32px",
            fontSize: "21px",
            textAlign: "center",
            color: "#414042",
            fontWeight: 600,
            minHeight: "160px",
            "@media (max-width: 576px)": {
              fontSize: "16px",
              minHeight: "120px",
            },
          }}
        >
          <p>
            Are you sure you want to cancel your Admin Account registration?
            Your information will not be saved.
          </p>
        </Box>
        <Box
          sx={{
            background: "#F3F3F3",
            padding: "15px 0",
            display: "flex",
            justifyContent: "center",
            gap: "100px",
            "@media (max-width: 576px)": {
              gap: "30px",
            },
          }}
        >
          <PrimaryButton
            label="No"
            padding="3px 40px"
            onClick={() => setModalOpen(false)}
          />
          <PrimaryButton
            label="Yes"
            padding="3px 40px"
            onClick={() => navigate("/")}
          />
        </Box>
      </CustomModal>
    </Box>
  );
};

export default CancelModal;
