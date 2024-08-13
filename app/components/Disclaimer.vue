<template>

    <v-dialog
      transition="dialog-top-transition"
      width="auto"
    >
      <template v-slot:activator="{ props }">
        <button v-bind="props" class="text-white hover:bg-stone-800 rounded-sm font-bold px-4 py-2 text-sm underline underline-offset-8 hover:no-underline flex items-center justify-center">DISCLAIMER</button>
      </template>
      <template v-slot:default="{ isActive }">
        <v-card>
          <v-toolbar
            color="primary"
            title="Disclaimer"
            size="large"
          ></v-toolbar>
          <v-card-text>
            <div class="text-small pa-12 mt-10"><strong><h3>Contact surveyor as not all surveys are present in this application (541) 420-8057.</h3></strong> <br />
              Crook County makes no warranty of any kind, expressed or implied, including any warranty of merchantability, fitness for a particular purpose, or any other matter. The County is not responsible for possible errors, omissions, misuse, or misinterpretation. County digital information is prepared for reference purposes only and should not be used, and is not intended for, survey or engineering purposes or the authoritative and/or precise location of boundaries, fixed human works, and/or the shape and contour of the earth. No representation is made concerning the legal status of any apparent route of access identified in digital or hardcopy mapping of geospatial information or data. Data from the Crook County Assessor’s Office may not be current. Data is updated as schedules and resources permit. Please notify Crook County GIS of any errors (541) 416-3930.</div>
          </v-card-text>
          <v-card-actions class="justify-end">
            <v-btn
              variant="elevated"
              @click="isActive.value = false"
              color="primary"
            >Agree</v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>

</template>

