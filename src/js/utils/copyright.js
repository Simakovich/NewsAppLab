import {copyright} from "../constants/constants";

export function addCopyrightText() {
  copyright.textContent = `© ${new Date().getFullYear()} Simakovich`
}