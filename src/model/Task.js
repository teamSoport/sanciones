import { Schema, model } from "mongoose";

const TaskSchema = Schema(
  {
    
    ceiso_ut: { 
      type: String, 
      required: true, 
      trim: true, 
      unique: true 
    },
    nom_so: {
      type: String,
      trim: true,
    },
    ag_info: { 
      type: String, 
      required: true, 
      trim: true, 
      unique: true 
    },
    nom_ag_rci: { 
      type: String, 
      required: true, 
      trim: true, 
      unique: true 
    },
    cargo: { 
      type: String, 
      required: true, 
      trim: true, 
      unique: true 
    },
    ceo_ac_i: { 
      type: String, 
      required: true, 
      trim: true, 
      unique: true 
    },
    cep_ori: { 
      type: String, 
      required: true, 
      trim: true, 
      unique: true 
    },
    tp: { 
      type: String, 
      required: true, 
      trim: true, 
      unique: true 
    },
    da_ra_ci: { 
      type: String, 
      required: true, 
      trim: true, 
      unique: true 
    },
    art69_frc: { 
      type: String, 
      required: true, 
      trim: true, 
      unique: true 
    },
    art70_i_frc: { 
      type: String, 
      required: true, 
      trim: true, 
      unique: true 
    },
    art70_ii_frc: { 
      type: String, 
      required: true, 
      trim: true, 
      unique: true 
    },
    a_p: { 
      type: String, 
      required: true, 
      trim: true, 
      unique: true 
    },
    dce: { 
      type: String, 
      required: true, 
      trim: true, 
      unique: true 
    },

    done: {
      type: Boolean,
      default: false,
    },
    
  },
  {
    timestamps: true,
    versionKey: false,
  },
  





);

export default model("Task", TaskSchema);
