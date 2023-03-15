<template>
  <div>
    <code>$t based on `defaultNS`:</code>
    <!-- This will remove the namespace -->
    <p>
      {{ $t('key') }}
    </p>
  </div>

  <div>
    <code>t based on `defaultNS`:</code>
    <!-- This will remove the namespace -->
    <p>
      {{ t('key') }}
    </p>
  </div>

  <div>
    <code>$t with namespace:</code>
    <!-- This will keep the namespace -->
    <p>
      {{ $t('key', { ns: 'test' }) }}
    </p>
  </div>

  <div>
    <code>t with namespace:</code>
    <!-- This will keep the namespace -->
    <p>
      {{ t('key', { ns: 'test' }) }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { useTranslation } from 'i18next-vue'

const { t } = useTranslation()
</script>
